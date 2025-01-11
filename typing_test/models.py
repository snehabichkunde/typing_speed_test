from django.db import models

class TypingTestResult(models.Model):
    user_name = models.CharField(max_length=100)
    typing_speed = models.FloatField()
    accuracy = models.FloatField()
    time_taken = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.user_name} - Speed: {self.typing_speed} wpm'
