from rest_framework import serializers
from .models import Test
from tags.models import Tag


class TagsField(serializers.RelatedField):
    def to_representation(self, value):
        return value.name

    def to_internal_value(self, data):
        return Tag.objects.get(name=data)

class TestSerializer(serializers.HyperlinkedModelSerializer):
    tags = TagsField(queryset=Tag.objects.all(), many=True)
    class Meta:
        model = Test
        fields = ['url', 'id', 'name', 'tags', 'steps']
