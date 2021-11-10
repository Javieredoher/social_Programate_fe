import axios from "axios";
const API = "http://localhost:4000";

class UploadService {
    getImages() {
        return axios.get(`${API.URI}/download`);
    }

    sendImages(file) {
        const form = new FormData();
        // form.append("name", name);
        form.append("file", file, "form-data");
        console.log(form);
        return axios.post(`${API.URI}/upload`, form);
    }
}

export default new UploadService();
