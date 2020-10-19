from django.db import models
from util.models import UTAPModel
from tags.models import Tag

class Device(UTAPModel):
    tags = models.ManyToManyField(Tag)
