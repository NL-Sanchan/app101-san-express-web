import { DynamoDBClient } from "@aws-sdk/client-dynamodb"
import { S3Client } from "@aws-sdk/client-s3";

export default callback => {
  // connect to a database if needed, then pass it to `callback`:
  const db = new DynamoDBClient({ region: 'ap-east-1' });
  const s3 = new S3Client({ region: 'ap-east-1' });
	callback(db, s3);
}
