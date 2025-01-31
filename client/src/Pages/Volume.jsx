import React, { useState } from "react";
import axios from "axios";
import Upload from "../Components/Upload";
import Header from "../Components/Header";
import SendButton from "../Components/SendButton";

function Volume() {
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (selectedFile) => {
    setFile(selectedFile);
  };

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a file to upload.");
      return;
    }
    
    setLoading(true);
    setError(null);
    setResponse(null);
    
    const formData = new FormData();
    formData.append("file", file);
    
    try {
      const res = await axios.post("https://your-api-endpoint.com/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setResponse(res.data);
    } catch (err) {
      setError("Error uploading file. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-t from-[#00c6fb] to-[#005bea] h-[100vh]">
      <Header />
      <main className="flex flex-col justify-center items-center align-middle gap-10 mt-10">
        <div className="flex flex-col justify-center items-center gap-5">
          <h1 className="text-3xl font-bold text-white">Upload the File Here</h1>
          <Upload onFileSelect={handleFileChange} />
          <SendButton onClick={handleUpload} />
        </div>
        {loading && <p className="text-white">Uploading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {response && (
          <div className="bg-white text-black p-5 rounded-lg shadow-lg w-96 text-center mt-5">
            <h2 className="text-xl font-bold">Response</h2>
            <p>{JSON.stringify(response, null, 2)}</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default Volume;
