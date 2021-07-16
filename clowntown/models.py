#theoretical schema id make for this using django ORM syntax

class Clown(models.Model):
	clownLicenseID=models.IntegerField()
	clownLicenseExpiration=models.DateTimeField()

	isActiveClown=models.BooleanField()

	performanceName=models.CharField(max_length=20)
	realName=models.CharField(max_length=20)

	homeAddress=models.FloatField()

	biography=models.TextField()

	def incidentReports(self):
		return IncidentReport.objects.filter(clown=self)
	def numIncidents(self):
		self.numIncidents.count()

INCIDENTS = [['S','Sighting'],
			 ['C','Clownflict'],
			]
class ClownPosse(models.Model):
	possename=models.CharField(max_length=1)

class PosseMembership(models.Model):
	clown=models.ForeignKey('Clown')
	posse=models.ForeignKey('ClownPosse')

class IncidentReport(models.Model):
	clown=models.ForeignKey('Clown',on_delete=models.PROTECT)
	location=models.FloatField()
	incidentType=models.TextField(choices=INCIDENTS)
	incidentDetails=models.TextField()

class ClownAttributeCategory(models.Model):
	attributeName=models.CharField(max_length=10)


class ClownWithAttribute(models.Model):
	clown=models.ForeignKey('clown',on_delete=models.PROTECT)
	attribute=models.ForeignKey('ClownAttributeCategory',on_delete=models.PROTECT)
	attributevalue=models.IntegerField()#determining type for all possible attributes would be tricky