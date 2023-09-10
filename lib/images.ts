import supabase from './supabase'

export function getImageUrl(path: string) {
  return supabase.storage.from('card-images').getPublicUrl(path).data.publicUrl
}
