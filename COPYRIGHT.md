# Copyright of luox-NRC-CIERf files

The luox-NRC-CIERf repository is a fork of the [luox](https://github.com/luox-app/luox/) project. File additions and modifications (of the original luox files) by the National Research Council of Canada (NRC), as listed below, are **Copyright (C) 2022 Her Majesty the Queen in Right of Canada.**

## Files added by NRC

The list of files *added* (A) by NRC is generated with the command:

```git
git log --oneline --author=somang --name-status before-nrc.. | grep "^A" | sort | uniq
```

which yields:

```
A       data/CES99_1nm.csv
A       data/Rf_test.csv
A       data/TCS99_1nm.csv
A       data/TCS99_5nm.csv
A       data/planckian_table_cie.csv
A       data/planckian_table_cie_calc.csv
A       data/planckian_table_ies.csv
A       scripts/ces99_csv_to_json.rb
A       scripts/planckian_table_csv_to_json.rb
A       scripts/tcs99_csv_to_json.rb
A       src/data/CES99_1nm.json
A       src/data/Rf_test.json
A       src/data/TCS99_1nm.json
A       src/data/TCS99_5nm.json
A       src/data/planckian_table_cie.json
A       src/data/planckian_table_cie_calc.json
A       src/data/planckian_table_ies.json
A       src/images/hueBG.png
A       src/images/nrc-signature-e-kr.jpg
A       src/javascript/cctCalculations.js
A       src/javascript/colourFidelityIndex.js
A       src/javascript/colourFidelityIndexRounded.js
A       src/javascript/components/CVGPlot.jsx
A       src/javascript/components/worker.js
A       src/javascript/tm30ColourFidelityIndex.js
A       test/colourFidelityIndex.test.js
A       test/tm30ColourFidelityIndex.test.js
```

## Files modified by NRC

The list of files *modified* (M) by NRC is generated with the command:

```
git log --oneline --author=somang --name-status before-nrc.. | grep "^M" | sort | uniq
```

which yields, omitting new files and changes to `package*.json`:

```
M       src/javascript/calculations.js
M       src/javascript/colourRenderingIndex.js
M       src/javascript/components/About.jsx
M       src/javascript/components/About.md
M       src/javascript/components/CalculationTable.jsx
M       src/javascript/components/CalculationTableCSV.js
M       src/javascript/components/ErrorTable.jsx
M       src/javascript/components/Intro.jsx
M       src/javascript/components/Results.jsx
M       src/javascript/components/SpectraTable.jsx
M       src/javascript/components/Upload.jsx
M       src/javascript/components/UploadForm.jsx
M       src/javascript/inputValidator.js
M       src/stylesheets/results.css
M       src/stylesheets/upload.css
M       test/calculations.test.js
M       test/colourRenderingIndex.test.js
M       test/inputValidator.test.js
```

The specific NRC modifications to these *luox* files can be determined by inspecting the log for each file, for example:

```
git log --author=somang --patch before-nrc.. src/javascript/calculations.js
```