import { getPublicRelatedProductsBySlug } from "@/libs/supabase/queries/products";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET(_request, { params }) {
  try {
    const productIdOrSlug = params?.id;
    const { data, error } = await getPublicRelatedProductsBySlug(productIdOrSlug);

    if (error) {
      return NextResponse.json(
        { success: false, message: "Unable to load related products" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, products: data || [] },
      {
        headers: {
          "Cache-Control": "no-store, no-cache, must-revalidate",
        },
      }
    );
  } catch {
    return NextResponse.json(
      { success: false, message: "Unable to load related products" },
      { status: 500 }
    );
  }
}
