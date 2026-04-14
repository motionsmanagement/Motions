import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
}

/**
 * Hook que actualiza dinámicamente el <title> y las meta-etiquetas
 * de cada sub-página de servicio para que Google las indexe de forma independiente.
 */
const useSEO = ({ title, description, canonical }: SEOProps) => {
  useEffect(() => {
    // Update title
    const prevTitle = document.title;
    document.title = title;

    // Update meta description
    let metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const prevDesc = metaDesc?.getAttribute('content') || '';
    if (metaDesc) metaDesc.setAttribute('content', description);

    // Update canonical
    let linkCanonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const prevCanonical = linkCanonical?.getAttribute('href') || '';
    if (linkCanonical) linkCanonical.setAttribute('href', canonical);

    // Update OG tags
    const ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
    const ogDesc = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');
    const ogUrl = document.querySelector<HTMLMetaElement>('meta[property="og:url"]');
    if (ogTitle) ogTitle.setAttribute('content', title);
    if (ogDesc) ogDesc.setAttribute('content', description);
    if (ogUrl) ogUrl.setAttribute('content', canonical);

    // Restore on unmount (back to home)
    return () => {
      document.title = prevTitle;
      if (metaDesc) metaDesc.setAttribute('content', prevDesc);
      if (linkCanonical) linkCanonical.setAttribute('href', prevCanonical);
      if (ogTitle) ogTitle.setAttribute('content', prevTitle);
      if (ogDesc) ogDesc.setAttribute('content', prevDesc);
      if (ogUrl) ogUrl.setAttribute('content', prevCanonical);
    };
  }, [title, description, canonical]);
};

export default useSEO;
