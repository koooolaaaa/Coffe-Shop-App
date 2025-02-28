from openai import OpenAI
from .utils import get_chatbot_response, double_check_json_output
import json
from copy import deepcopy
import os 
import dotenv
dotenv.load_dotenv()

class GuardAgent():
    def __init__(self): 
        self.client = OpenAI(
            api_key=os.getenv("RUNPOD_API_KEY"),
            base_url=os.getenv("RUNPOD_CHATBOT_URL")
        )
        self.model_name=os.getenv("MODEL_NAME")
        
    def get_response(self, messages): 
        messages = deepcopy(messages)

        system_prompt = """
        You are a helpful AI assistant for a coffee shop application that serves drinks and pastries.
        Your task is to determine whether the user’s request is relevant to the coffee shop.
        The user is allowed to:
        1. Ask questions about the coffee shop (location, working hours, menu items, etc.).
        2. Ask about menu item details (ingredients, descriptions, etc.).
        3. Make an order.
        4. Ask for recommendations.

        The user is not allowed to:
        1. Ask about topics unrelated to the coffee shop.
        2. Ask about internal staff or recipe details.

        Your output must be a valid JSON string (with no markdown formatting, backticks, or extra text) following exactly this structure:

        {
        "chain of thought": "Your reasoning here.",
        "decision": "allowed" or "not allowed",
        "message": "" if allowed, or "Sorry, I can't help with that. Can I help you with your order?" if not allowed,
        "memory": {
            "guard_decision": "allowed" or "not allowed"
        }
        }

        Make sure that the first character of your response is '{' and the last character is '}'.
        """


        input_messages = [{"role": "system", "content": system_prompt}] + messages[-3:]

        chatbot_output = get_chatbot_response(self.client, self.model_name, input_messages)
        chatbot_output = double_check_json_output(self.client, self.model_name, chatbot_output)
        output = self.postprocess(chatbot_output)

        return output
    
    def postprocess(self, output):
        output = json.loads(output)

        dict_output = { 
            "role": "assistant",
            "content": output["message"],
            "memory": {
                "agent": "guard_agent",
                "guard_decision": output["decision"]
            }
        }

        return dict_output