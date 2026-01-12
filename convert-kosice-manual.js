import fs from 'fs';
import { pdf } from 'pdf-to-img';

async function convertPdfToImages() {
    const pdfPath = './public/kosice/manual.pdf';
    const outputDir = './public/kosice/pages/';

    // Create output directory if it doesn't exist
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    console.log('Converting Kosice Manual PDF to images...');

    try {
        const document = await pdf(pdfPath, { scale: 2 }); // Scale 2 should be good for web
        let pageNum = 1;

        for await (const image of document) {
            const outputPath = `${outputDir}page-${pageNum}.png`;
            fs.writeFileSync(outputPath, image);
            console.log(`✓ Created ${outputPath}`);
            pageNum++;
        }

        console.log(`\nConversion complete! Total pages: ${pageNum - 1}`);
    } catch (err) {
        console.error("Error during conversion:", err);
    }
}

convertPdfToImages().catch(console.error);
