import React from 'react'

const style = {
    wrapper: `relative`,
    container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://lh3.googleusercontent.com/oFjTE9xF3YTBQZ_DMbss5QOdWVr_3hROQqqqpH_h3ZlNdA8zK4jvr420nhvWkucxBx70g3mB6oyunCJAfL4E_Mjywm2dxG6G7t7hMT9UXDjQEiZ0lo1o8-A1JJrYvioKDgEHKRwaYXyweBqj2tCtYGt377QY2qAuX1Exnnck45lQNYl_tmSktkmPf-7n68Gd8HNC4kYXq6oZ8NnWLo-HIT3crJ1Rr2EW20gSfx7hddrKxScGx03PEFAKpSDtuejiMloRM-y-c8JVF09DugobHGi-q17mfVa1quNfH_KJIFEdT1a6x-Q_2C-x41O7C4W8TCOu5Qae0BKo-3IFhAEcmxwIZ8tf0rzjK7zL949VpaJ7aQX0KNsjfPX0eEcBUNHQMo6gAvTpdZFksdQuM-54OkLTco8f0PEAAfcHtIToTIKmz804-ggG-K6GMmi-xhVf7hKVNxVp50RFHFoSUgUjHultV0_bEzg_MrZt3maqndgqfR5ridtboo6A_ybpRc7usQ7dlyLukfVKyzpban1nqoWn2KmjLT_GeeRUTUx7apGzNJbUfUCK3j-uvcBNzKvgGQPp5bZ4DxcjdSbcO0ZYggkiCr68qphyh4LC4Lx4OR2kM24OFYe_nJS0ZCYy6cgsJ7RY7vqdWBN2x8wIe_KH8v0z_LE7PXnDFpri1yw-zi8qg9oIb6i2duJHdjQI6nyYiMl25s8wS5np8ySeNILMahGBwE8nptKOD4YMpMxK0bBq0Ae0QxOXkAf3eCCsT6HgVhiwBxhvUWbtfAOjYU4RosDIGWmz0SyWDa6M8kvCknTtimzxKMpzk0r0RiPtwNdPAerJ4gfcqtAK22-sDVdPnMxG66-iw8hOrKaEWfIjh3F1gsIlCX_SGD_B1rZt9-hJ9OCT7OCpNxZEOSv43jXA-K7PJSy5N-KdibnVA7GLd1I=s320-no?authuser=0')] before:bg-cover before:bg-center before:opacity-30 before:blur`,
    contentWrapper: `flex h-screen relative justify-center flex-wrap items-center`,
    copyContainer: `w-1/2`,
    title: `relative text-white text-[46px] font-semibold`,
    description: `text-[#8a939b] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
    ctaContainer: `flex`,
    accentedButton: ` relative text-lg font-semibold px-12 py-4 bg-[#2181e2] rounded-lg mr-5 text-white hover:bg-[#42a0ff] cursor-pointer`,
    button: ` relative text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer`,
    cardContainer: `rounded-[3rem]`,
    infoContainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white`,
    author: `flex flex-col justify-center ml-4`,
    name: ``,
    infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
}

const Hero = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <div className={style.contentWrapper}>
                    <div className={style.copyContainer}>
                        <div className={style.title}>
                            Discover, collect, and sell extraordinary NFTs
                        </div>
                        <div className={style.description}>
                            OpenSea is the world&apos;s first and largest NFT marketplace
                        </div>
                        <div className={style.ctaContainer}>
                            <button className={style.accentedButton}>Explore</button>
                            <button className={style.button}>Create</button>
                        </div>
                    </div>
                    <div className={style.cardContainer}>
                        <img
                            className="rounded-t-lg"
                            src="https://lh3.googleusercontent.com/SXhkDzzQA6uQJk2oc6nYPrsF8PUZmKUkoubdXKJn_zQf9fQSOiF0csFvkc8j9qsb4nHN9qNzRCYGk-kyxKRTSrMynJEzk7SFpOnxS6nJ4TD58At4Or569ZQG4ehKDK6gKQ_luPNOhh3b9qr4b2nfLt80jY_HwOjRkN_7U_yJJT1jZCtLrJk4fJLfbHCzlKw4OVb9HhzpeQKJziMr4SXj3TgoNbcRr_tywLpqBHUd8n3qCNPHPPvBV_DFOMKv3Su0uaHDs9JIRipwsis1JDnwEbsC9Z1OEbCsKpRPzVc7ox-9g3UFbUnqWFvKdO6rkq712bUUlVj2MNPJSxPCWsqCyaoL1qYYAU0zK8B8IXvCdieDvScMgo8YzZdilSPe0xQFGuAKDnuzj7vS81tNqFG1EfQofpD-KNEJlC-hm4YSQHM31HQyghQBX9rZFgHyM5NKFjpZUX_ZfAfFIGrWw0LHQsBV4H5qU9Pl4uhiloTLSEcdZMO_MoQztPMQyWNPooLRgxzYbgZo8q63FQZJJjGKwVPGx6FzGknhu_Db8_CvKw_vK9rhTKOqV_OF2-SQT6T9EdUdxXatLFl8e_qmZmsaII3Eaftn7DpYyJ_gc2N4AJbrE3Ls3D6hqVo7bqCCzevnxJSdL_f9jpY3fiubm5WhNvPTGF9r9Iqm_qRvT20pTVUbHN2mhiYDCdlrv1hc63yuORQmQsJr-qrlgqw6wuBwLFZ3Vwkzdi6TtdvcTHWY5uQhPrBUc67S0bETGtZ8eUYoEuJ_GF7_wpmln087cA6Vc4EyMidyhi3-q_P0Q0oXwlXKdm5RLLWzn_UDUI4rPVv2KLIYjqry9QI3SSwqAFpTH1hLV_SYFUSKlWmdTeDPv1sAHHFgTdU-t0M4RjRmAb90fBUkmrZ4q2O1Gj3CJZXQvzYozdRvtdwfFjtK5on_BE0=s500-no?authuser=0"
                            // src="https://lh3.googleusercontent.com/oFjTE9xF3YTBQZ_DMbss5QOdWVr_3hROQqqqpH_h3ZlNdA8zK4jvr420nhvWkucxBx70g3mB6oyunCJAfL4E_Mjywm2dxG6G7t7hMT9UXDjQEiZ0lo1o8-A1JJrYvioKDgEHKRwaYXyweBqj2tCtYGt377QY2qAuX1Exnnck45lQNYl_tmSktkmPf-7n68Gd8HNC4kYXq6oZ8NnWLo-HIT3crJ1Rr2EW20gSfx7hddrKxScGx03PEFAKpSDtuejiMloRM-y-c8JVF09DugobHGi-q17mfVa1quNfH_KJIFEdT1a6x-Q_2C-x41O7C4W8TCOu5Qae0BKo-3IFhAEcmxwIZ8tf0rzjK7zL949VpaJ7aQX0KNsjfPX0eEcBUNHQMo6gAvTpdZFksdQuM-54OkLTco8f0PEAAfcHtIToTIKmz804-ggG-K6GMmi-xhVf7hKVNxVp50RFHFoSUgUjHultV0_bEzg_MrZt3maqndgqfR5ridtboo6A_ybpRc7usQ7dlyLukfVKyzpban1nqoWn2KmjLT_GeeRUTUx7apGzNJbUfUCK3j-uvcBNzKvgGQPp5bZ4DxcjdSbcO0ZYggkiCr68qphyh4LC4Lx4OR2kM24OFYe_nJS0ZCYy6cgsJ7RY7vqdWBN2x8wIe_KH8v0z_LE7PXnDFpri1yw-zi8qg9oIb6i2duJHdjQI6nyYiMl25s8wS5np8ySeNILMahGBwE8nptKOD4YMpMxK0bBq0Ae0QxOXkAf3eCCsT6HgVhiwBxhvUWbtfAOjYU4RosDIGWmz0SyWDa6M8kvCknTtimzxKMpzk0r0RiPtwNdPAerJ4gfcqtAK22-sDVdPnMxG66-iw8hOrKaEWfIjh3F1gsIlCX_SGD_B1rZt9-hJ9OCT7OCpNxZEOSv43jXA-K7PJSy5N-KdibnVA7GLd1I=s320-no?authuser=0"
                            alt=""
                        />
                        <div className={style.infoContainer}>
                            <img
                                className="h-[2.25rem] rounded-full"
                                src="https://lh3.googleusercontent.com/pwcDSootJcR5HF1xMwcjXakJoO78a202n_dJE_Yl8Oj-SHOys-1ekIDoOkOSRYKUWIseUq31KoNdVNrmeA2fJkkoVbj4KAnnWLPTGN49nAOfasugpFSIPvUa0lOJKzSQ8Y7QlY4kMdo-g0MJpU1C04d0F83bOxMoXcNFtXs_lEm0AF3OFgGytCweyNcoQ-y64R0195VcsjN4CK0vuwA7sQvapCfEImgPcdmmb7j135u0D_kBBcS-zYB7LArXkRD4NUh4MMULq-MuA33xgwL91GbyRKOgFuD8XembKpjvkbU182CwjIXyDlO9Oy30IAUJJfmALJzEekqV8UEq0KT1BnFGTr0fIaD1mkgbiiaupLPmzxkrfv5zSjCAEQ2oLbpsLEYmBdFRrZS2pfqLPE-c0tLdous3h1mcOruj-jZG38kfBhJ57GanE7r5xZqduwohULz74dPEoDSK6wIloGhBoIiSgv5i3oMtlIzVSnTYrkG-2QLQm9O9siu-CSXm_eVpESWyDL8-WdPr0X4yyXjKwuw0hC1X-9iKs8PLhvF86ahM76IdRYM-aOT1VmcwBMsZfzwsF8GCozHpOGAVTRB5hsRoFsAKS6KPg24DQf_Zu15q7qNXSZtDKadyWLl2SJvS_9MecbsgoqiCGNgczLKUlLUx9jGRcOXPghxnzx_JWohjNeD19V3dX3c2g92C6TygcfbelX7ZXtzp97S03I8ebKGyhDPeMc7HONHdgFxCVZyklJM4IDSQVxnCqrLLE7RGacNv9c6EGWVML6JvDP6mwkMSZqSf6Ea1tqlGLgbKhAeoj50oQth1MYXzC1HpAWHps56J2p68juKVjOziZ4ZDxm7su0WwkTSSg3Ndam_KE8id1U4ERr1sP5bcc2RRV94Dqb-7XNg3DPabBOHDwtHZ_rfeOd2R9LZ3XrERpN0F5TQ=s610-no?authuser=0"
                                alt=""
                            />
                            <div className={style.author}>
                                <div className={style.name}>HI#2024</div>
                                <a
                                    className="text-[#1868b7]"
                                    href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/2324922113504035910649522729980423429926362207300810036887725141691069366277"
                                >
                                    Code-Parth
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
