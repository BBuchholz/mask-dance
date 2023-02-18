const {
    DATABASE_URL,
    SUPABASE_SERVICE_API_KEY
} = process.env;

// Connect to our database 
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(DATABASE_URL, SUPABASE_SERVICE_API_KEY);

// Our standard serverless handler function
export const handler = async (event) => {

  // Insert a row
    const { data, error } = await supabase
        .from('Note')
        .insert([
            { note: 'I need to not forget this' },
        ]);

  // Did it work?
  console.log(data, error);
  
}