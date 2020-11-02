from rest_framework import serializers
from tags.models import Tag

class TagsField(serializers.RelatedField):
    def to_representation(self, value):
        return value.name

    def to_internal_value(self, data):
        return Tag.objects.get(name=data)
