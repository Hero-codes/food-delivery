import { getXataClient } from "@/src/xata";

export const runtime = 'edge';

const xata = getXataClient();

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const searchQuery = searchParams.get('query') ?? '';

    const { records } = await xata.search.all(searchQuery, {
        tables: [
            {
                table: 'restaurants',
                target: [{ column: 'shopName' }]
            },
        ],
        // Add fuzzy search to the query to handle typos
        fuzziness: 1,
        prefix: 'phrase'
    });

    return new Response(JSON.stringify(records), {
        headers: { 'Cache-Control': 'max-age=1, stale-while-revalidate=300' }
    });
}