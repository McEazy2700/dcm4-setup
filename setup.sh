#!/usr/bin/env bash

set -e

echo "📁 Creating OHIF config folder..."
mkdir -p ohif-config

echo "📝 Writing OHIF configuration..."
cat > ohif-config/default.json << 'EOF'
{
  "servers": {
    "dicomWeb": [
      {
        "name": "DCM4CHEE",
        "qidoRoot": "http://192.168.1.176:8080/dcm4chee-arc/rs",
        "wadoRoot": "http://192.168.1.176:8080/dcm4chee-arc/rs",
        "wadoUriRoot": "http://192.168.1.176:8080/dcm4chee-arc/wado",
        "qidoSupportsIncludeField": true,
        "imageRendering": "wadors",
        "thumbnailRendering": "wadors"
      }
    ]
  }
}
EOF

echo "🚀 Starting services..."
docker compose up --build -d

echo "✅ Done!"
echo "DCM4CHEE UI: http://localhost:8080/dcm4chee-arc/ui2/"
echo "OHIF Viewer: http://localhost:3000/"
