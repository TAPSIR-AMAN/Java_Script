#include <iostream>
using namespace std;
int main(){
    // int days;
    // cin>>days;
    // switch (days)
    // {
    // case 1:
    //     cout<<"Monday";
    //     break;
    
    // case 2:
    //     cout<<"Tuesday";
    //     break;
    
    // case 3:
    //     cout<<"Wednesday";
    //     break;
    
    // case 4:
    //     cout<<"Thursday";
    //     break;
    
    // case 5:
    //     cout<<"Friday";
    //     break;
    // case 6:
    //     cout<<"Saturday";
    //     break;
    // case 7:
    //     cout<<"Sunday";
    //     break;
        
    //     default:
    //     cout<<"Invalid";

    //     break;
    // }

    // int days;
    //     cout<<"day=";
    //     cin>>days;
    //     switch (days){
    //         case 1:
    //             cout<<"Monday";
    //             break;
    //         case 2:
    //             cout<<"Tuesday";
    //             break;
    //         case 3:
    //             cout<<"Wednesday";
    //             break;
    //         case 4:
    //             cout<<"Thursday";
    //             break;
    //         case 5:
    //             cout<<"Friday";
    //             break;
    //         case 6:
    //             cout<<"Saturday";
    //             break;
    //         case 7:
    //             cout<<"Sunday";
    //             break;
    //         default:
    //             cout<<"Invalid";
    //     }
    // int arr[5]={1,2,3,4,5};
    // int target=5;
    // for (int i = 0; i < 5; i++)
    // {
    //     for (int j = i+1; j < 5; j++)
    //     {
    //         if (arr[i]+arr[j]==target)
    //         {
    //             cout<<"["<<i<<","<<j<<"]"<<endl;
    //         }
            
    //     }
        
    // }
    int arr[]={1,2,3,3,3,3,3,3,3,6,6,7,7,8,8,4,3,2};
    int size=sizeof(arr)/sizeof(arr[0]);
    int low=0;
    int high=size-1;
    while (low<high)
    {
        int mid=(low+high)/2;
        if (arr[mid] < arr[mid+1]) {
            low = mid+1;
        }
        else if(arr[mid]>arr[mid+1])
        {
            high=mid;
        }
        else{
            high--;
        }
        // cout<<low;
    }
    // cout<<low;
    cout<<"this is the peak of the arr:"<<arr[low];
    





    return 0;
}

