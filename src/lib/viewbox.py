import json


with open('valTestingPrunedViewBox.json') as f:
    d = json.load(f)

def findAmount(string, thing):
    start = string.find(thing)
    length = len(thing)
    end = string.find('"', start + length)
    
    return string[start + length: end ]
    
sorted_data = sorted(d, key=lambda x: x['name'])
        
with open("valTestingPrunedViewBoxSorted.json", "w") as testing:
    json.dump(sorted_data, testing, indent=4)
