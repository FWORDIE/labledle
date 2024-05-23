import datetime
import time
from zoneinfo import ZoneInfo

# # US Pacific Time
# time = datetime.datetime.now(tz=ZoneInfo("Europe/London"))
# print(time)
# code = time.strftime("%B %d, %Y")

# Create a datetime object
now = datetime.datetime.now()

# Format the datetime object as a string using strftime
formatted_date = now.strftime("%Y-%m-%d %H:%M:%S")

print(formatted_date)
