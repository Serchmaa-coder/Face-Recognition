import os
from flask import Flask, request

app = Flask(__name__)

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return 'No file part'
    
    file = request.files['file']

    if file.filename == '':
        return 'No selected file'

    # Use an absolute path to the uploads directory
    upload_dir = os.path.join(os.getcwd(), 'uploads')
    if not os.path.exists(upload_dir):
        os.makedirs(upload_dir)

    file.save(os.path.join(upload_dir, file.filename))

    return 'File uploaded successfully'

if __name__ == '__main__':
    app.run(debug=True)
