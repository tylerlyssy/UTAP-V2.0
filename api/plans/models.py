from django.db import models
from util.models import UTAPModel
from tags.models import Tag
from tests.models import Test

class Plan(UTAPModel):
    tags = models.ManyToManyField(Tag)
    tests = models.ManyToManyField(Test)
