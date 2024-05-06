#!pwsh
$bucket = "inventario.gruporivero.com"
$cloudfront_id = "E2RMUPGCP8FFZA"
$src_path = "dist/inventario2023"

aws --profile="rivero" s3 sync "$src_path" "s3://$bucket"
aws --profile="rivero" cloudfront create-invalidation --distribution-id "$cloudfront_id" --paths "/*"
