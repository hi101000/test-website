import smtplib

sender = input('who is sending this email?')
receivers = []
recievers_input=('who is getting the email?')
recievers.append(recievers_input)

message = input('enter the message')

try:
   smtpObj = smtplib.SMTP('localhost')
   smtpObj.sendmail(sender, receivers, message)         
   print "Successfully sent email"
except SMTPException:
   print "Error: unable to send email"