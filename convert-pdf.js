import fs from 'fs';
import { pdf } from 'pdf-to-img';

async function convertPdfToImages() {
    const pdfPath = './public/Maria-Sol-Soto-Chasvin_CV_EN.pdf';
    const outputDir = './public/cv-pages/';

    // Create output directory if it doesn't exist
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    console.log('Converting PDF to images...');

    const document = await pdf(pdfPath, { scale: 3 }); // High quality
    let pageNum = 1;

    for await (const image of document) {
        const outputPath = `${outputDir}page-${pageNum}.png`;
        fs.writeFileSync(outputPath, image);
        console.log(`✓ Created ${outputPath}`);
        pageNum++;
    }

    console.log(`\nConversion complete! Total pages: ${pageNum - 1}`);
}

convertPdfToImages().catch(console.error);
