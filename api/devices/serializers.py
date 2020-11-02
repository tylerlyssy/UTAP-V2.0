from rest_framework import serializers
from .models import Device
from tags.models import Tag
from util.serializers import TagsField

class DeviceSerializer(serializers.HyperlinkedModelSerializer):
    tags = TagsField(queryset=Tag.objects.all(), many=True)
    class Meta:
        model = Device
        fields = ['url', 'id', 'name', 'tags']
