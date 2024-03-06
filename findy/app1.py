import os
from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
from deepface import DeepFace

app = Flask(__name__)
CORS(app)

POSTER_DIRECTORY = 'poster'  # Assuming the folder with posters is named 'poster'

# Function to perform face recognition
def check_actor_in_posters(actor_image_path):
    actor = DeepFace.detectFace(actor_image_path)
    
    # Iterate through poster directory
    for filename in os.listdir(POSTER_DIRECTORY):
        poster_path = os.path.join(POSTER_DIRECTORY, filename)
        try:
            # Detect face on the movie poster
            poster = DeepFace.detectFace(poster_path)
            
            # Verify if the actor is in the poster
            result = DeepFace.verify(actor, poster, enforce_detection=False)

            if result['verified']:
                return filename  # Return the matched poster filename
        except Exception as e:
            print(f"Error processing poster {filename}: {str(e)}")
            pass

    return None  # Actor not found in any posters

@app.route('/upload-photo', methods=['POST'])
def upload_photo():
    if 'file' not in request.files:
        return 'No file part'

    file = request.files['file']

    if file.filename == '':
        return 'No selected file'

    # Save the uploaded file as the actor/actress image
    uploaded_file_path = 'uploads/' + file.filename
    file.save(uploaded_file_path)

    # Check if actor is in any movie posters
    matched_poster = check_actor_in_posters(uploaded_file_path)
    
    if matched_poster:
        return jsonify({'result': f'The actor/actress is in {matched_poster}!'})
    else:
        return jsonify({'result': 'The actor/actress is not in any movie posters.'})

@app.route('/get-uploaded-photo/<uploaded_file_name>', methods=['GET'])
def get_uploaded_photo(uploaded_file_name):
    uploaded_file_path = f'uploads/{uploaded_file_name}'
    return send_file(uploaded_file_path, as_attachment=True)

@app.route('/get-matched-poster/<filename>', methods=['GET'])
def get_matched_poster(filename):
    matched_poster_path = os.path.join(POSTER_DIRECTORY, filename)
    return send_file(matched_poster_path, as_attachment=True)


if __name__ == '__main__':
    app.run(debug=True, port=5005)
