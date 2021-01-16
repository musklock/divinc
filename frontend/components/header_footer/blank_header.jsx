import React from 'react';


const RegisterHeader = props => {

    return (

        <span className="header_wrapper">
            {/* <div className="header-logo">MATCHTOR</div> */}
            <div>
                <svg width="169" height="32" viewBox="0 0 169 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M37.9538 25C37.6504 25 37.3849 24.8957 37.1573 24.6871C36.9487 24.4596 36.8444 24.1941 36.8444 23.8907V3.89422C36.8444 3.57185 36.9487 3.30637 37.1573 3.09777C37.3849 2.88918 37.6504 2.78489 37.9538 2.78489C38.4089 2.78489 38.7407 2.97452 38.9493 3.35378L48.0516 21.4444L56.9831 3.35378C57.2107 2.97452 57.5425 2.78489 57.9787 2.78489C58.2821 2.78489 58.5381 2.88918 58.7467 3.09777C58.9553 3.30637 59.0596 3.57185 59.0596 3.89422V23.8907C59.0596 24.1941 58.9553 24.4596 58.7467 24.6871C58.5381 24.8957 58.2821 25 57.9787 25C57.6563 25 57.3813 24.8957 57.1538 24.6871C56.9452 24.4596 56.8409 24.1941 56.8409 23.8907V7.79111L48.9333 23.9476C48.7247 24.3079 48.4024 24.488 47.9662 24.488C47.4921 24.488 47.1508 24.2604 46.9422 23.8053L39.0631 8.04711V23.8907C39.0631 24.1941 38.9493 24.4596 38.7218 24.6871C38.5132 24.8957 38.2572 25 37.9538 25ZM70.9051 25.1422C69.445 25.1422 68.1365 24.8009 66.9798 24.1182C65.823 23.4166 64.9033 22.4684 64.2207 21.2738C63.557 20.0791 63.2251 18.7327 63.2251 17.2347C63.2251 15.7176 63.5664 14.3618 64.2491 13.1671C64.9507 11.9724 65.8989 11.0338 67.0936 10.3511C68.2882 9.64948 69.6346 9.29866 71.1327 9.29866C72.6307 9.29866 73.9676 9.64948 75.1433 10.3511C76.338 11.0338 77.2767 11.9724 77.9593 13.1671C78.661 14.3618 79.0213 15.7176 79.0402 17.2347V23.9191C79.0402 24.2415 78.9359 24.507 78.7273 24.7156C78.5187 24.9052 78.2533 25 77.9309 25C77.6085 25 77.343 24.9052 77.1344 24.7156C76.9259 24.507 76.8216 24.2415 76.8216 23.9191V22.184C76.1768 23.0942 75.3424 23.8148 74.3184 24.3458C73.2944 24.8767 72.1567 25.1422 70.9051 25.1422ZM71.1327 23.1511C72.2325 23.1511 73.2091 22.8951 74.0624 22.3831C74.9347 21.8711 75.6174 21.1695 76.1104 20.2782C76.6224 19.368 76.8784 18.3535 76.8784 17.2347C76.8784 16.0969 76.6224 15.0824 76.1104 14.1911C75.6174 13.2999 74.9347 12.5982 74.0624 12.0862C73.2091 11.5553 72.2325 11.2898 71.1327 11.2898C70.0518 11.2898 69.0752 11.5553 68.2029 12.0862C67.3306 12.5982 66.6384 13.2999 66.1264 14.1911C65.6144 15.0824 65.3584 16.0969 65.3584 17.2347C65.3584 18.3535 65.6144 19.368 66.1264 20.2782C66.6384 21.1695 67.3306 21.8711 68.2029 22.3831C69.0752 22.8951 70.0518 23.1511 71.1327 23.1511ZM88.9604 25C87.9554 25 87.0547 24.763 86.2582 24.2889C85.4807 23.8148 84.8644 23.1701 84.4093 22.3547C83.9542 21.5203 83.7267 20.5721 83.7267 19.5102V11.9156H81.8778C81.5933 11.9156 81.3563 11.8302 81.1667 11.6596C80.977 11.4699 80.8822 11.2424 80.8822 10.9769C80.8822 10.6924 80.977 10.4649 81.1667 10.2942C81.3563 10.1046 81.5933 10.0098 81.8778 10.0098H83.7267V5.60089C83.7267 5.27852 83.8215 5.01303 84.0111 4.80444C84.2197 4.59585 84.4852 4.49155 84.8076 4.49155C85.1299 4.49155 85.3954 4.59585 85.604 4.80444C85.8126 5.01303 85.9169 5.27852 85.9169 5.60089V10.0098H89.1311C89.4156 10.0098 89.6526 10.1046 89.8422 10.2942C90.0319 10.4649 90.1267 10.6924 90.1267 10.9769C90.1267 11.2424 90.0319 11.4699 89.8422 11.6596C89.6526 11.8302 89.4156 11.9156 89.1311 11.9156H85.9169V19.5102C85.9169 20.4773 86.2013 21.2738 86.7702 21.8996C87.3391 22.5064 88.0692 22.8098 88.9604 22.8098H89.7284C90.0319 22.8098 90.2784 22.9141 90.468 23.1227C90.6576 23.3313 90.7524 23.5967 90.7524 23.9191C90.7524 24.2415 90.6387 24.507 90.4111 24.7156C90.1836 24.9052 89.8991 25 89.5578 25H88.9604ZM100.832 25.1422C99.3335 25.1422 97.9966 24.8009 96.8209 24.1182C95.6642 23.4166 94.7444 22.4684 94.0618 21.2738C93.3981 20.0791 93.0662 18.7327 93.0662 17.2347C93.0662 15.7176 93.3886 14.3618 94.0333 13.1671C94.6781 11.9724 95.5599 11.0338 96.6787 10.3511C97.7975 9.64948 99.087 9.29866 100.547 9.29866C102.917 9.29866 104.842 10.2089 106.321 12.0293C106.53 12.2569 106.606 12.5034 106.549 12.7689C106.492 13.0154 106.331 13.2335 106.065 13.4231C105.857 13.5748 105.62 13.6317 105.354 13.5938C105.108 13.5369 104.89 13.3947 104.7 13.1671C103.6 11.9156 102.216 11.2898 100.547 11.2898C99.4852 11.2898 98.5465 11.5458 97.7311 12.0578C96.9347 12.5698 96.3089 13.2714 95.8538 14.1627C95.4176 15.0539 95.1996 16.0779 95.1996 17.2347C95.1996 18.3724 95.4366 19.387 95.9107 20.2782C96.3847 21.1695 97.0484 21.8711 97.9018 22.3831C98.7551 22.8951 99.7317 23.1511 100.832 23.1511C102.349 23.1511 103.572 22.7434 104.501 21.928C104.728 21.7384 104.965 21.6341 105.212 21.6151C105.459 21.5961 105.686 21.672 105.895 21.8427C106.122 22.0513 106.245 22.2883 106.264 22.5538C106.302 22.8193 106.217 23.0468 106.008 23.2364C104.624 24.507 102.899 25.1422 100.832 25.1422ZM111.518 25C111.177 25 110.902 24.9052 110.693 24.7156C110.504 24.507 110.409 24.2415 110.409 23.9191V10.5502C110.409 10.2089 110.504 9.94341 110.693 9.75378C110.902 9.54518 111.177 9.44089 111.518 9.44089C111.841 9.44089 112.097 9.54518 112.286 9.75378C112.495 9.94341 112.599 10.2089 112.599 10.5502V11.5173C113.206 10.8157 113.955 10.2658 114.846 9.86755C115.756 9.46933 116.733 9.27022 117.776 9.27022C119.122 9.27022 120.327 9.55466 121.388 10.1236C122.45 10.6735 123.285 11.4889 123.892 12.5698C124.517 13.6507 124.83 14.9686 124.83 16.5236V23.9191C124.83 24.2225 124.726 24.4785 124.517 24.6871C124.309 24.8957 124.053 25 123.749 25C123.427 25 123.161 24.8957 122.953 24.6871C122.744 24.4785 122.64 24.2225 122.64 23.9191V16.5236C122.64 14.76 122.147 13.461 121.161 12.6267C120.194 11.7733 118.99 11.3467 117.548 11.3467C116.619 11.3467 115.775 11.5268 115.017 11.8871C114.277 12.2474 113.689 12.7404 113.253 13.3662C112.817 13.992 112.599 14.7031 112.599 15.4996V23.9191C112.599 24.2415 112.495 24.507 112.286 24.7156C112.097 24.9052 111.841 25 111.518 25ZM111.518 18.6569C111.177 18.6569 110.902 18.5526 110.693 18.344C110.504 18.1354 110.409 17.8699 110.409 17.5476V3.89422C110.409 3.55289 110.504 3.2874 110.693 3.09777C110.902 2.88918 111.177 2.78489 111.518 2.78489C111.841 2.78489 112.097 2.88918 112.286 3.09777C112.495 3.2874 112.599 3.55289 112.599 3.89422V17.5476C112.599 17.8699 112.495 18.1354 112.286 18.344C112.097 18.5526 111.841 18.6569 111.518 18.6569ZM135.319 25C134.314 25 133.414 24.763 132.617 24.2889C131.84 23.8148 131.223 23.1701 130.768 22.3547C130.313 21.5203 130.086 20.5721 130.086 19.5102V11.9156H128.237C127.952 11.9156 127.715 11.8302 127.526 11.6596C127.336 11.4699 127.241 11.2424 127.241 10.9769C127.241 10.6924 127.336 10.4649 127.526 10.2942C127.715 10.1046 127.952 10.0098 128.237 10.0098H130.086V5.60089C130.086 5.27852 130.18 5.01303 130.37 4.80444C130.579 4.59585 130.844 4.49155 131.166 4.49155C131.489 4.49155 131.754 4.59585 131.963 4.80444C132.171 5.01303 132.276 5.27852 132.276 5.60089V10.0098H135.49C135.774 10.0098 136.011 10.1046 136.201 10.2942C136.391 10.4649 136.486 10.6924 136.486 10.9769C136.486 11.2424 136.391 11.4699 136.201 11.6596C136.011 11.8302 135.774 11.9156 135.49 11.9156H132.276V19.5102C132.276 20.4773 132.56 21.2738 133.129 21.8996C133.698 22.5064 134.428 22.8098 135.319 22.8098H136.087C136.391 22.8098 136.637 22.9141 136.827 23.1227C137.017 23.3313 137.111 23.5967 137.111 23.9191C137.111 24.2415 136.998 24.507 136.77 24.7156C136.542 24.9052 136.258 25 135.917 25H135.319ZM147.333 25.1422C145.816 25.1422 144.46 24.8009 143.265 24.1182C142.07 23.4356 141.132 22.4969 140.449 21.3022C139.766 20.1076 139.425 18.7517 139.425 17.2347C139.425 15.6987 139.766 14.3333 140.449 13.1387C141.132 11.944 142.07 11.0053 143.265 10.3227C144.46 9.64 145.816 9.29866 147.333 9.29866C148.85 9.29866 150.196 9.64 151.372 10.3227C152.566 11.0053 153.505 11.944 154.188 13.1387C154.87 14.3333 155.221 15.6987 155.24 17.2347C155.24 18.7517 154.889 20.1076 154.188 21.3022C153.505 22.4969 152.566 23.4356 151.372 24.1182C150.196 24.8009 148.85 25.1422 147.333 25.1422ZM147.333 23.1511C148.433 23.1511 149.419 22.8951 150.291 22.3831C151.163 21.8711 151.846 21.1695 152.339 20.2782C152.832 19.387 153.078 18.3724 153.078 17.2347C153.078 16.0969 152.832 15.0824 152.339 14.1911C151.846 13.2809 151.163 12.5698 150.291 12.0578C149.419 11.5458 148.433 11.2898 147.333 11.2898C146.233 11.2898 145.247 11.5458 144.374 12.0578C143.502 12.5698 142.81 13.2809 142.298 14.1911C141.805 15.0824 141.558 16.0969 141.558 17.2347C141.558 18.3724 141.805 19.387 142.298 20.2782C142.81 21.1695 143.502 21.8711 144.374 22.3831C145.247 22.8951 146.233 23.1511 147.333 23.1511ZM160.154 25C159.434 25 159.073 24.6397 159.073 23.9191V10.5218C159.073 9.80118 159.434 9.44089 160.154 9.44089C160.875 9.44089 161.235 9.80118 161.235 10.5218V11.7449C161.804 10.9864 162.506 10.389 163.34 9.95289C164.174 9.49778 165.094 9.27022 166.099 9.27022C166.971 9.27022 167.645 9.39348 168.119 9.64C168.593 9.88652 168.773 10.2468 168.659 10.7209C168.564 11.157 168.337 11.3846 167.976 11.4036C167.635 11.4036 167.227 11.3846 166.753 11.3467C165.691 11.2519 164.743 11.3656 163.909 11.688C163.093 11.9914 162.439 12.4655 161.946 13.1102C161.472 13.755 161.235 14.523 161.235 15.4142V23.9191C161.235 24.6397 160.875 25 160.154 25Z" fill="black"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M15.8464 2.96289H8.58307e-06L6.67216 9.63504H22.5185L15.8464 2.96289ZM6.67215 9.63505V25.4814L0 18.8093V2.96289L6.67215 9.63505Z" fill="#CCCCCC"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M6.67218 25.4814L22.5185 25.4814L15.8464 18.8093L2.28882e-05 18.8093L6.67218 25.4814ZM15.8464 18.8093L15.8464 2.96292L22.5186 9.63508L22.5186 25.4814L15.8464 18.8093Z" fill="black"/>
                </svg>

            </div>

            <div>
                
            </div>

        </span>
        
    )

}

export default RegisterHeader;