# YouTube Recommender API

The YouTube Recommender API provides a single endpoint that returns an array of YouTube videos similar to the given input.

## Endpoint

`POST /api/get-similar`

`Content-type application/json`

## Request

Only accepts POST requests with a JSON body containing a single field:

```json
{
  "videoUrl": "https://youtube.com/watch?v=dQw4w9WgXcQ"
}
```

### Parameters

| Name | Type | Description |
|------|------|-------------|
| `videoUrl` | string | The URL of the YouTube video for which you want to find similar videos. |

## Response

API Response contains an array of objects, each representing a similar video. The response includes up to 5 similar videos, no redundants.

### Response Structure

```json
[
  {
    "videoId": string,
    "videoURL": string,
    "thumbnail": string,
    "title": string,
    "views": number
  },
  ...
]
```

### Fields

| Name | Type | Description |
|------|------|-------------|
| `videoId` | string | The YouTube video ID. |
| `videoURL` | string | The full URL of the YouTube video. |
| `thumbnail` | string | URL of the video thumbnail image. |
| `title` | string | The title of the video. |
| `views` | number | The number of views for the video. |

## Examples

Code snippets of API usage with various frameworks and tools:

### cURL

```bash
curl -X POST -H "Content-Type: application/json" -d '{"videoUrl":"https://youtube.com/watch?v=dQw4w9WgXcQ"}' https://your-api-domain.com/api/get-similar
```

### Python (using requests library)

```python
import requests
import json

url = "https://your-api-domain.com/api/get-similar"
payload = {"videoUrl": "https://youtube.com/watch?v=dQw4w9WgXcQ"}
headers = {"Content-Type": "application/json"}

response = requests.post(url, data=json.dumps(payload), headers=headers)

if response.status_code == 200:
    similar_videos = response.json()
    print(json.dumps(similar_videos, indent=2))
else:
    print(f"Error: {response.status_code}")
    print(response.text)
```

### JavaScript (Node.js with axios)

```javascript
const axios = require('axios');

const url = 'https://your-api-domain.com/api/get-similar';
const payload = { videoUrl: 'https://youtube.com/watch?v=dQw4w9WgXcQ' };

axios.post(url, payload)
  .then(response => {
    console.log(JSON.stringify(response.data, null, 2));
  })
  .catch(error => {
    console.error('Error:', error.response ? error.response.status : error.message);
    console.error(error.response ? error.response.data : error.message);
  });
```

### Ruby

```ruby
require 'net/http'
require 'uri'
require 'json'

uri = URI('https://your-api-domain.com/api/get-similar')
payload = { videoUrl: 'https://youtube.com/watch?v=dQw4w9WgXcQ' }

http = Net::HTTP.new(uri.host, uri.port)
http.use_ssl = true
request = Net::HTTP::Post.new(uri.path, 'Content-Type' => 'application/json')
request.body = payload.to_json

response = http.request(request)

if response.code == '200'
  similar_videos = JSON.parse(response.body)
  puts JSON.pretty_generate(similar_videos)
else
  puts "Error: #{response.code}"
  puts response.body
end
```

### Go

```go
package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
)

func main() {
	url := "https://your-api-domain.com/api/get-similar"
	payload := map[string]string{"videoUrl": "https://youtube.com/watch?v=dQw4w9WgXcQ"}

	jsonPayload, _ := json.Marshal(payload)

	resp, err := http.Post(url, "application/json", bytes.NewBuffer(jsonPayload))
	if err != nil {
		fmt.Println("Error:", err)
		return
	}
	defer resp.Body.Close()

	body, _ := ioutil.ReadAll(resp.Body)

	if resp.StatusCode == 200 {
		var similarVideos interface{}
		json.Unmarshal(body, &similarVideos)
		prettyJSON, _ := json.MarshalIndent(similarVideos, "", "  ")
		fmt.Println(string(prettyJSON))
	} else {
		fmt.Println("Error:", resp.Status)
		fmt.Println(string(body))
	}
}
```

## Error Handling

This API uses standard HTTP status codes to indicate the success or failure of a request. In case of an error, the response body will contain additional information about the error.

| Status Code | Description |
|-------------|-------------|
| 200 | Success |
| 400 | Bad Request - Invalid input |
| 404 | Not Found - Video not found |
| 500 | Internal Server Error |

