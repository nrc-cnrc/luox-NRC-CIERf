import {parseCSV} from './csvParser.js'
import {createTables, createErrorTable} from './ui.js'

const fileInput = document.getElementById('file-input')
const uploadForm = document.getElementById('upload-form')

const conversionFunction = (areaSelect, powerSelect) => {
  const areaScale = parseFloat(areaSelect.options[areaSelect.selectedIndex].value)
  const powerScale = parseFloat(powerSelect.options[powerSelect.selectedIndex].value)
  return (wavelength, sample) =>  sample / powerScale * areaScale
}

const handleFileSelect = () => {
  const fileList = fileInput.files
  const fileButton = document.getElementById('upload-form-submit')
  fileButton.disabled = fileList.length === 0
}

const handleSubmit = async (event) => {
  event.preventDefault();

  const fileUploadedSection =  document.getElementById('file-uploaded')
  const fileUploadSection = document.getElementById('file-upload')

  const fileList = fileInput.files
  for (const file of fileList) {
    const [errors, rawRows, sampleCount] = await parseCSV(file)
    if (errors.length === 0) {
      const spectrumTable = document.getElementById('spectrum-table')
      const calculationTable = document.getElementById('calculation-table')
      const areaUnitSelect = document.getElementById('area-units')
      const powerUnitSelect = document.getElementById('power-units')
      const footerButtons = document.getElementById('table-actions')
      const unitConversion = conversionFunction(areaUnitSelect, powerUnitSelect)
      createTables(rawRows, sampleCount, spectrumTable, calculationTable, unitConversion, footerButtons)
    } else {
      createErrorTable(errors, fileUploadedSection)
    }
    fileUploadSection.style.display = 'none';
    fileUploadedSection.style.display = 'block';
  }
}

fileInput.addEventListener("change", handleFileSelect, false);
uploadForm.addEventListener("submit", handleSubmit, false);
