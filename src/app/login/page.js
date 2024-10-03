import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

// Root URL handling
export default async function Page() {
  var { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
  });
  console.log(data);
  console.log(error);
}
