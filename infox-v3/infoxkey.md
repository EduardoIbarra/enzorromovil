*******INFOX*******

JARSIGNER
/usr/bin/jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore infoxkeystore.keystore infox/android-release-unsigned.apk infox

Alias:
infox

Password:
aora810529su1

ZIPALIGN
/Users/gobae/Library/Android/sdk/build-tools/27.0.3/zipalign -v 4 infox/android-release-unsigned.apk infox/infox-release-v3.0.3.apk


Cuenta de PlayStore
Infox
infoxbuscadorsa@gmail.com
aora810529su1

Facebook
keytool -exportcert -alias infox -keystore ./infoxkeystore.keystore | openssl sha1 -binary | openssl base64
Result: 2jmj7l5rSw0yVb/vlWAYkK/YBwk=