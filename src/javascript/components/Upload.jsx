import React, { useState } from "react";
import UploadForm from "./UploadForm";
import Results from "./Results";

const Upload = () => {
  const [radianceOrIrradiance, setRadianceOrIrradiance] = useState(
    "irradiance"
  );
  const [rows, setRows] = useState([]);
  const [sampleCount, setSampleCount] = useState(0);

  return (
    <>
      <div className="row">
        <div className="col">
          <h1 className="mt-5">Reporting Light Exposure</h1>
        </div>
      </div>
      <UploadForm
        radianceOrIrradiance={radianceOrIrradiance}
        setRadianceOrIrradiance={setRadianceOrIrradiance}
        setRows={setRows}
        setSampleCount={setSampleCount}
      />
      <Results
        rows={rows}
        sampleCount={sampleCount}
        radianceOrIrradiance={radianceOrIrradiance}
      />
    </>
  );
};

export default Upload;
