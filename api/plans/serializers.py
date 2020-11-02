from rest_framework import serializers
from .models import Plan
from tags.models import Tag
from util.serializers import TagsField
from tests.models import Test


class TestsField(serializers.RelatedField):
    def to_representation(self, value):
        return value.id

    def to_internal_value(self, data):
        return Tag.objects.get(name=data)


class PlanSerializer(serializers.HyperlinkedModelSerializer):
    tags = TagsField(queryset=Tag.objects.all(), many=True)
    tests = TestsField(queryset=Tag.objects.all(), many=True)
    class Meta:
        model = Plan
        fields = ['url', 'id', 'name', 'tags', 'tests']
