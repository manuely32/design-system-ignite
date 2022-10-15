import { SVGAttributes } from "react";

interface LogoProps extends SVGAttributes<HTMLOrSVGElement>{

}

export function Logo(props: LogoProps) {
  return (
    <svg
      width={102}
      height={120}
      viewBox="0 0 102 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M102 60.01c0-6.976-8.462-13.587-21.435-17.687 2.993-13.653 1.663-24.514-4.2-27.992-1.352-.816-2.932-1.202-4.657-1.202v4.787c.956 0 1.725.193 2.37.558 2.827 1.674 4.054 8.05 3.098 16.25-.229 2.018-.603 4.143-1.06 6.31-4.076-1.03-8.525-1.824-13.203-2.339-2.807-3.971-5.717-7.578-8.649-10.733 6.778-6.504 13.14-10.067 17.464-10.067v-4.787c-5.717 0-13.202 4.207-20.77 11.505-7.567-7.255-15.052-11.42-20.77-11.42v4.787c4.304 0 10.687 3.542 17.465 10.003a100.75 100.75 0 00-8.587 10.712c-4.699.515-9.148 1.31-13.223 2.361a66.67 66.67 0 01-1.081-6.225c-.977-8.2.229-14.575 3.035-16.271.624-.386 1.435-.558 2.391-.558v-4.787c-1.746 0-3.326.386-4.698 1.202-5.843 3.478-7.152 14.318-4.138 27.927C8.42 46.466 0 53.056 0 60.011c0 6.976 8.462 13.588 21.435 17.688-2.993 13.652-1.663 24.514 4.2 27.991 1.351.816 2.932 1.202 4.678 1.202 5.718 0 13.202-4.207 20.77-11.505 7.568 7.255 15.053 11.42 20.77 11.42 1.747 0 3.327-.387 4.699-1.203 5.842-3.477 7.152-14.317 4.137-27.927C93.58 73.577 102 66.966 102 60.011zM74.93 45.694c-.769 2.769-1.725 5.624-2.806 8.479A102.57 102.57 0 0069.4 49.02a116.824 116.824 0 00-2.994-5.023 91.2 91.2 0 018.524 1.696zm-9.522 22.861c-1.622 2.898-3.285 5.646-5.01 8.2-3.098.28-6.238.43-9.398.43-3.14 0-6.279-.15-9.356-.408a118.926 118.926 0 01-5.031-8.157 113.144 113.144 0 01-4.325-8.544 113.333 113.333 0 014.304-8.565c1.622-2.898 3.285-5.645 5.01-8.2 3.098-.279 6.238-.43 9.398-.43 3.14 0 6.279.151 9.356.409 1.725 2.554 3.41 5.28 5.031 8.157a113.144 113.144 0 014.325 8.543 121.671 121.671 0 01-4.304 8.565zm6.716-2.79a94.047 94.047 0 012.869 8.543 90.682 90.682 0 01-8.566 1.717 119.332 119.332 0 002.994-5.087 123.21 123.21 0 002.703-5.173zM51.042 88.668a87.736 87.736 0 01-5.78-6.87c1.87.087 3.784.15 5.717.15 1.955 0 3.888-.042 5.78-.15a83.127 83.127 0 01-5.717 6.87zM35.573 76.024a91.168 91.168 0 01-8.524-1.695c.77-2.77 1.726-5.625 2.807-8.48a102.656 102.656 0 002.723 5.152 142.994 142.994 0 002.994 5.023zm15.365-44.67a87.736 87.736 0 015.78 6.869c-1.872-.086-3.784-.15-5.718-.15-1.954 0-3.888.042-5.78.15a83.127 83.127 0 015.718-6.87zM35.552 43.997a119.336 119.336 0 00-5.696 10.24 94.057 94.057 0 01-2.87-8.544 98.173 98.173 0 018.566-1.696zM16.737 70.873C9.377 67.63 4.616 63.38 4.616 60.01s4.76-7.642 12.12-10.862c1.789-.794 3.743-1.503 5.76-2.168 1.185 4.207 2.744 8.586 4.678 13.073-1.913 4.465-3.452 8.822-4.616 13.008a61.883 61.883 0 01-5.821-2.19zm11.185 30.674c-2.827-1.674-4.054-8.05-3.098-16.25.229-2.017.603-4.142 1.06-6.31 4.076 1.03 8.525 1.824 13.203 2.34 2.807 3.97 5.717 7.577 8.649 10.732-6.778 6.505-13.14 10.068-17.464 10.068-.936-.022-1.726-.215-2.35-.58zM77.238 85.19c.977 8.2-.229 14.576-3.035 16.271-.624.387-1.435.559-2.391.559-4.304 0-10.687-3.542-17.465-10.004 2.911-3.155 5.822-6.74 8.587-10.711 4.699-.515 9.148-1.31 13.223-2.361.478 2.168.852 4.25 1.081 6.246zm8.005-14.317c-1.788.794-3.743 1.502-5.76 2.168-1.185-4.208-2.744-8.587-4.678-13.073 1.913-4.465 3.452-8.823 4.616-13.009a64.608 64.608 0 015.842 2.19c7.36 3.241 12.121 7.492 12.121 10.862-.02 3.37-4.781 7.642-12.141 10.861z"
        fill="#61DAFB"
      />
      <path
        d="M50.98 69.82c5.247 0 9.5-4.391 9.5-9.81 0-5.417-4.253-9.81-9.5-9.81-5.248 0-9.502 4.393-9.502 9.81 0 5.419 4.254 9.81 9.501 9.81z"
        fill="#61DAFB"
      />
    </svg>
  )
}
