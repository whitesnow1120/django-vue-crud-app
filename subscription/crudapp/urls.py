from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from crudapp import views

urlpatterns = [
    path('crud/', views.SubscriptionList.as_view()),
    path('crud/<int:pk>/', views.SubscriptionDetail.as_view()),
]