const { jsPDF } = require("jspdf");
const A4_PAPER_DIMENSIONS = {
  width: 210,
  height: 297,
};
const A4_PAPER_RATIO = A4_PAPER_DIMENSIONS.width / A4_PAPER_DIMENSIONS.height;
export const imageDimensionsOnA4 = (dimensions) => {
  const isLandscapeImage = dimensions.width >= dimensions.height;
  if (isLandscapeImage) {
    return {
      width: A4_PAPER_DIMENSIONS.width,
      height:
        A4_PAPER_DIMENSIONS.width / (dimensions.width / dimensions.height),
    };
  }
  const imageRatio = dimensions.width / dimensions.height;
  if (imageRatio > A4_PAPER_RATIO) {
    const imageScaleFactor =
      (A4_PAPER_RATIO * dimensions.height) / dimensions.width;
    const scaledImageHeight = A4_PAPER_DIMENSIONS.height * imageScaleFactor;
    return {
      height: scaledImageHeight,
      width: scaledImageHeight * imageRatio,
    };
  }
  return {
    width: A4_PAPER_DIMENSIONS.height / (dimensions.height / dimensions.width),
    height: A4_PAPER_DIMENSIONS.height,
  };
};
/**
 *
 * @param {ARRAY} images - check the formats here => http://raw.githack.com/MrRio/jsPDF/master/docs/module-addImage.html#~addImage
 * @param {STRING} output_method - check the formats here => http://raw.githack.com/MrRio/jsPDF/master/docs/jsPDF.html#output
 * @param {Boolean} save - would you like to save the pdf?
 * @param {STRING} pdfname - if you want to save the pdf then what is it's name
 * @returns output
 */
const generatePdfFromImages = (images, output_method, save, pdfname) => {
  const doc = new jsPDF("p");
  doc.deletePage(1);
  images.forEach((image) => {
    const imageDimensions = imageDimensionsOnA4({
      width: image.width,
      height: image.height,
    });
    doc.addPage();
    doc.addImage(
      image.src,
      image.imageType,
      (A4_PAPER_DIMENSIONS.width - imageDimensions.width) / 2,
      (A4_PAPER_DIMENSIONS.height - imageDimensions.height) / 2,
      imageDimensions.width,
      imageDimensions.height
    );
  });

  if (save) {
    doc.save(`${pdfname}.pdf`);
  }
  return doc.output(output_method);
};
module.exports = generatePdfFromImages;
