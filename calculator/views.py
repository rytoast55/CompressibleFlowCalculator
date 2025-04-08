from django.http import HttpResponse, HttpResponseRedirect, HttpResponseNotModified, HttpRequest, Http404
from django.shortcuts import render, redirect
from django.urls import reverse


def index(request: HttpRequest):
    
    return render(request, "calculator/home.html")


def backSolve(request: HttpRequest):
    
    return render(request, "calculator/back-solve.html")


def isentropicFlow(request: HttpRequest):

    return render(request, "calculator/isentropic.html")


def normalShock(request: HttpRequest):

    return render(request, "calculator/normal-shock.html")


def nonSteadyExpansion(request: HttpRequest):

    return render(request, "calculator/ns-expansion.html")


def obliqueShock(request: HttpRequest):

    return render(request, "calculator/oblique.html")


def prandtlMeyerExpansion(request: HttpRequest):

    return render(request, "calculator/pm-expansion.html")


def generateTable(request: HttpRequest):

    return render(request, "calculator/table.html")