from django.urls import path
from . import views


app_name = 'calculator'

urlpatterns = [
    path('', views.index, name='index'),
    path('back-solve', views.backSolve, name='back-solve'),
    path('isentropic', views.isentropicFlow, name='isentropic'),
    path('normal-shock', views.normalShock, name='normal-shock'),
    path('ns-expansion', views.nonSteadyExpansion, name='ns-expansion'),
    path('oblique-shock', views.obliqueShock, name='oblique-shock'),
    path('pm-expansion', views.prandtlMeyerExpansion, name='pm-expansion'),
    path('tables', views.generateTable, name='tables'),
]