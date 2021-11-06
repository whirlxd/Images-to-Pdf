## IMAGES TO PDF PACKAGE

> A package to convert images to pdf.

#### Install

```bash
npm install images-to-pdf-package
```

#### Usage

```typescript
//typescript or esmodules
import ImagesToPdfPackage from "images-to-pdf-package";
const image_object1 = {
  src: "",
  height: "",
  imageType: "",
  width: "",
};
const image_object2 = {
  src: "",
  height: "",
  imageType: "",
  width: "",
};

const arrayOfImages = [image_object1, image_object2];

ImagesToPdfPackage(
  arrayOfImages,
  bloburi /* all types available here - http://raw.githack.com/MrRio/jsPDF/master/docs/jsPDF.html#output*/,
  false
); //if you want to save the pdf then set false to true and add another argument containing the name of the pdf
```

```javascript
//nodejs
const ImagesToPdfPackage = require("images-to-pdf-package");
const image_object1 = {
  src: "",
  height: "",
  imageType: "",
  width: "",
};
const image_object2 = {
  src: "",
  height: "",
  imageType: "",
  width: "",
};

const arrayOfImages = [image_object1, image_object2];

ImagesToPdfPackage(
  arrayOfImages,
  bloburi /* all types available here - http://raw.githack.com/MrRio/jsPDF/master/docs/jsPDF.html#output*/,
  false
); //if you want to save the pdf then set false to true and add another argument containing the name of the pdf
```

###### Credits

this guy made this [thing](https://github.com/pixochi/pdf-from-images-react-app) , i just turned it into a package

## License

MIT
