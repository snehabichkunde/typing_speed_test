from django.shortcuts import render
import random

def home(request):
    texts = [
        "function add(a, b) { return a + b; }",
        "const array = [1, 2, 3, 4, 5]; array.forEach(num => console.log(num));",
        "This is another longer text. Speed and accuracy matter. Type it as quickly as possible!"
    ]
    
    initial_text = random.choice(texts)  # Choose a random text
    return render(request, 'home.html', {'initial_text': initial_text})
