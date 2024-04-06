package com.fiap2mobr.network

import com.facebook.react.modules.network.OkHttpClientFactory
import com.facebook.react.modules.network.OkHttpClientProvider
import com.facebook.react.modules.network.ReactCookieJarContainer
import okhttp3.CertificatePinner
import okhttp3.OkHttpClient
import java.util.concurrent.TimeUnit

class SSLPinningFactory : OkHttpClientFactory {
    override fun createNewNetworkModuleClient(): OkHttpClient {
        val certificatePinner: CertificatePinner = CertificatePinner.Builder()
                .add(hostname, "sha256/dQrcLsW4IIFLNnhYN+u1l+junGOVTlclFDBj9c+mcR4=")
                .build()

        val clientBuilder: OkHttpClient.Builder = OkHttpClientProvider.createClientBuilder()
                .connectTimeout(CONNECTION_TIMEOUT.toLong(), TimeUnit.MILLISECONDS)
                .readTimeout(READ_TIMEOUT.toLong(), TimeUnit.MILLISECONDS)
                .writeTimeout(WRITE_TIMEOUT.toLong(), TimeUnit.MILLISECONDS)
                .cookieJar(ReactCookieJarContainer())
                .certificatePinner(certificatePinner)
        return clientBuilder.build()
    }

    companion object {
        private const val hostname = "*.tabnews.com.br"
        private const val READ_TIMEOUT = 100 * 1000
        private const val WRITE_TIMEOUT = 100 * 1000
        private const val CONNECTION_TIMEOUT = 100 * 1000
    }
}