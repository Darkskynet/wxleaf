import requests
import json
# set your API token here
token = "#################################"
# set the latitude and longitude of the location you're interested in
## lat = "40.730610"
## lon = "-73.935242"
# set the range of dates you're interested in (in YYYY-MM-DD format)
start_date = "2023-02-16"
end_date = "2023-02-16"
# set the product you're interested in (e.g. reflectivity, velocity, etc.)
##product = "NEXRAD3"
# set the resolution of the data (either "250m" or "1km")
resolution = "250m"
# construct the API request URL
url = f"https://www.ncei.noaa.gov/cdo-web/api/v2/data?datasetid=NEXRAD3&startdate={start_date}&enddate={end_date}"
## &boundingbox={lon},{lat},{lon},{lat}&units=metric
# make the API request
response = requests.get(url, headers={"token": token})
# check if the request was successful
if response.status_code != 200:
    print(f"Request failed with status code {response.status_code}")
    print(response.text)
    exit()
# parse the JSON response
data = json.loads(response.text)
# check if the "data" key is present in the response
if "data" not in data:
    print("The 'data' key is not present in the response:")
    print(response.text)
    exit()

# extract the NEXRAD data from the response
if len(data["data"]) == 0:
    print("No data returned from the API.")
    exit()
nexrad_data = data["data"][0]["data"]

# convert the data to a format usable by Leaflet (a list of lat-lng pairs)
leaflet_data = []
for row in nexrad_data:
    lat = row["latitude"]
    lon = row["longitude"]
    value = row["value"]
    if value is not None:
        leaflet_data.append([lat, lon, value])

# write the converted data to a JSON file
with open("leaflet_data.json", "w") as f:
    json.dump(leaflet_data, f)

print("Data successfully downloaded and converted for use with Leaflet.")
