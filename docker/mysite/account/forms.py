from django.contrib.auth.forms import UserCreationForm

class CustomUserCreationForm(UserCreationForm):
    class Meta(UserCreationForm.Meta):
        fields = UserCreationForm.Meta.fields + ("email",)

""" class EmployeeForm(forms.ModelForm): 
    class Meta: 
        model = image 
        fields = ['name', 'ticket_image']  """