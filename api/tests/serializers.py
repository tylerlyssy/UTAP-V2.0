from rest_framework import serializers
from .models import Test
from tags.models import Tag
from util.serializers import TagsField


class TestSerializer(serializers.HyperlinkedModelSerializer):
    tags = TagsField(queryset=Tag.objects.all(), many=True)
    class Meta:
        model = Test
        fields = ['url', 'id', 'name', 'tags', 'steps']
