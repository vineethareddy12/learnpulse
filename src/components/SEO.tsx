import { useEffect } from 'react';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    ogImage?: string;
    ogUrl?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords, ogImage, ogUrl }) => {
    useEffect(() => {
        document.title = `${title} | LearnPulse`;
        
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', description);
        }

        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords && keywords) {
            metaKeywords.setAttribute('content', keywords);
        }

        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute('content', title);

        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute('content', description);

        if (ogImage) {
            const ogImg = document.querySelector('meta[property="og:image"]');
            if (ogImg) ogImg.setAttribute('content', ogImage);
        }

        if (ogUrl) {
            const ogU = document.querySelector('meta[property="og:url"]');
            if (ogU) ogU.setAttribute('content', ogUrl);
        }
    }, [title, description, keywords, ogImage, ogUrl]);

    return null;
};

export default SEO;
