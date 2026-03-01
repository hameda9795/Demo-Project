/**
 * Placeholder API Route
 * For future API implementations
 */

import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ 
    message: 'De Gouden Boon API - Demo',
    status: 'ok',
    version: '1.0.0'
  });
}
