from django.db import models
from util.models import UTAPModel
from tags.models import Tag

class Test(UTAPModel):
    tags = models.ManyToManyField(Tag)
    steps = models.TextField(max_length=36000, default='')
