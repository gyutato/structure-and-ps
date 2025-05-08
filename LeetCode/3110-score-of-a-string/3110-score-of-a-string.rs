impl Solution {
    pub fn score_of_string(s: String) -> i32 {
        let bytes = s.as_bytes();
        let mut sum = 0;
        for i in 1..bytes.len() {
            sum += (bytes[i - 1] as i32 - bytes[i] as i32).abs();
        }

        sum
    }
}