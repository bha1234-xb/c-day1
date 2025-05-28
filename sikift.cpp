#include<iostream>
using namespace std;

int a[]={1,4,2,6,7,5};
int n,count =0, s=0;
int main(){
    for(n=0;n<6;n++){
       s+=a[n];
       count++;
    }
    float avg=(float)s/count;
    cout<<"trung binh cong la: "<<avg;
    return 0;
}
