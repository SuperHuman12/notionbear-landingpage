// Assuming _loadFromJson is imported from a utility module
import { _loadFromJson } from "../utils/helper";

const URL = "https://notionbear.com";

interface IntegrationOrTemplate {
  id: string;
  type: 'integration' | 'template';
}


async function loadIntegrations(): Promise<IntegrationOrTemplate[]> {
  try {
    const integrationsFile = await _loadFromJson(false)
      .then((items: any[]): IntegrationOrTemplate[] => 
        items.map(item => ({ ...item, type: 'integration' })));
        
    const templatesFile = await _loadFromJson()
      .then((items: any[]): IntegrationOrTemplate[] => 
        items.map(item => ({ ...item, type: 'template' })));
    
    return [
      ...integrationsFile,
      ...templatesFile
    ];
  } catch (error) {
    console.error("Failed to load integrations", error);
    return [];
  }
}

// Adjusted to account for the new type property
function generateSiteMap(integrationsOrTemplates: IntegrationOrTemplate[]): string {
    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!--Manually set URLs we know already-->
  <url>
    <loc>${URL}</loc>
  </url>
  <url>
    <loc>${URL}/integration</loc>
  </url>
  <url>
    <loc>${URL}/pricing</loc>
  </url>
  <url>
    <loc>${URL}/affiliate</loc>
  </url>
  <url>
    <loc>${URL}/template</loc>
  </url>
  ${integrationsOrTemplates
            .map(item => {
                return `
        <url>
            <loc>${URL}/${item.type}/${item.id}</loc>
        </url>
      `;
            })
            .join("")}
</urlset>
`;
}

export async function GET(): Promise<Response> {
    const integrationsOrTemplates = await loadIntegrations();
    const body = generateSiteMap(integrationsOrTemplates);

    return new Response(body, {
        status: 200,
        headers: {
            "Cache-Control": "public, s-maxage=86400, stale-while-revalidate",
            "Content-Type": "application/xml",
        },
    });
}
